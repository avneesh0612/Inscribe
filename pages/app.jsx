import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { UnsupportedChainIdError } from "@web3-react/core";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import MemberList from "../components/MemberList";
import Proposal from "../components/Proposal";
import SignIn from "../components/SignIn";
import SwitchNetwork from "../components/SwitchNetwork";

const sdk = new ThirdwebSDK("rinkeby");

const bundleDropModule = sdk.getBundleDropModule(
  "0x2e2040BB43ba63AE7E055f28C3F61F2eb9e7B6d4"
);

const tokenModule = sdk.getTokenModule(
  "0x4833b336A4C0C61d0Ac35BcAb772bef7BEd86031"
);

const voteModule = sdk.getVoteModule(
  "0x65C30844e5f263436EE6e88544cc24c5c0D1B1af"
);

const Home = () => {
  const { address, provider, error } = useWeb3();
  const signer = provider ? provider.getSigner() : undefined;
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState({});
  const [memberAddresses, setMemberAddresses] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const handleFormSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    setIsVoting(true);
    const votes = proposals.map(proposal => {
      let voteResult = {
        proposalId: proposal.proposalId,
        vote: 2,
      };
      proposal.votes.forEach(vote => {
        const elem = document.getElementById(
          proposal.proposalId + "-" + vote.type
        );
        if (elem.checked) {
          voteResult.vote = vote.type;
          return;
        }
      });
      return voteResult;
    });

    try {
      const delegation = await tokenModule.getDelegationOf(address);
      if (delegation === ethers.constants.AddressZero) {
        await tokenModule.delegateTo(address);
      }
      try {
        await Promise.all(
          votes.map(async vote => {
            const proposal = await voteModule.get(vote.proposalId);
            if (proposal.state === 1) {
              return voteModule.vote(vote.proposalId, vote.vote);
            }
            return;
          })
        );
        try {
          await Promise.all(
            votes.map(async vote => {
              const proposal = await voteModule.get(vote.proposalId);

              if (proposal.state === 4) {
                return voteModule.execute(vote.proposalId);
              }
            })
          );
          setHasVoted(true);
        } catch (err) {
          console.error("failed to execute votes", err);
        }
      } catch (err) {
        console.error("failed to vote", err);
      }
    } catch (err) {
      console.error("failed to delegate tokens");
    } finally {
      setIsVoting(false);
    }
  };

  useEffect(() => {
    sdk.setProviderOrSigner(signer);
  }, [signer]);

  useEffect(() => {
    if (!address) {
      return;
    }
    return bundleDropModule
      .balanceOf(address, "0")
      .then(balance => {
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
        } else {
          setHasClaimedNFT(false);
        }
      })
      .catch(error => {
        setHasClaimedNFT(false);
        console.error("failed to nft balance", error);
      });
  }, [address]);

  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }
    bundleDropModule
      .getAllClaimerAddresses("0")
      .then(addresses => {
        setMemberAddresses(addresses);
      })
      .catch(err => {
        console.error("failed to get member list", err);
      });
  }, [hasClaimedNFT]);

  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }
    tokenModule
      .getAllHolderBalances()
      .then(amounts => {
        setMemberTokenAmounts(amounts);
      })
      .catch(err => {
        console.error("failed to get token amounts", err);
      });
  }, [hasClaimedNFT]);

  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }
    voteModule
      .getAll()
      .then(proposals => {
        setProposals(proposals);
      })
      .catch(err => {
        console.error("failed to get proposals", err);
      });
  }, [hasClaimedNFT]);

  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }
    if (!proposals.length) {
      return;
    }
    voteModule
      .hasVoted(proposals[0].proposalId, address)
      .then(hasVoted => {
        setHasVoted(hasVoted);
        if (hasVoted) {
        } else {
        }
      })
      .catch(err => {
        console.error("failed to check if wallet has voted", err);
      });
  }, [hasClaimedNFT, proposals, address]);

  const memberList = useMemo(() => {
    return memberAddresses.map(address => {
      return {
        address,
        tokenAmount: ethers.utils.formatUnits(
          memberTokenAmounts[address] || 0,
          18
        ),
      };
    });
  }, [memberAddresses, memberTokenAmounts]);

  const mintNft = () => {
    setIsClaiming(true);
    bundleDropModule
      .claim("0", 1)
      .then(() => {
        setHasClaimedNFT(true);
      })
      .catch(err => {
        console.error("failed to claim", err);
      })
      .finally(() => {
        setIsClaiming(false);
      });
  };

  if (error instanceof UnsupportedChainIdError) {
    return <SwitchNetwork />;
  }

  if (!address) {
    return <SignIn />;
  }

  if (hasClaimedNFT) {
    return (
      <div className="flex min-h-screen w-screen flex-col items-center pt-32">
        <Header />
        <h1 className="my-5 text-center font-Ubuntu text-3xl font-semibold md:text-4xl">
          ✒️{" "}
          <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Inscribe Member Page
          </span>
        </h1>
        <p className="mt-2 mb-5 text-lg font-medium">
          Congratulations on being a member
        </p>
        {/* <h2>You have minted our inclusive NFT</h2>
        <NFTCard /> */}

        <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
          <MemberList memberList={memberList} />
          <div>
            <h2 className="text-lg font-medium">Active Proposals</h2>
            <form onSubmit={handleFormSubmit}>
              {proposals.map(proposal => (
                <Proposal
                  key={proposal.proposalId}
                  votes={proposal.votes}
                  description={proposal.description}
                  proposalId={proposal.proposalId}
                />
              ))}

              <div
                onClick={() => connectWallet("injected")}
                className="group relative mt-5"
              >
                <div className="absolute -inset-1 animate-tilt rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 opacity-75 blur filter backdrop-blur-lg group-hover:opacity-100"></div>

                <button
                  type="submit"
                  disabled={isVoting || hasVoted}
                  className={`isVoting && "cursor-wait" } relative w-full rounded-lg bg-black py-3
                     px-10 text-lg font-medium
                md:text-2xl ${hasVoted && "cursor-not-allowed"}`}
                >
                  {isVoting
                    ? "Voting..."
                    : hasVoted
                    ? "You Already Voted"
                    : "Submit Votes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Header />

      <h1 className="my-5 text-center font-Ubuntu text-2xl font-semibold md:text-4xl">
        Mint your free ✒️ Inscribe Membership NFT
      </h1>
      <div
        disabled={isClaiming}
        onClick={() => mintNft()}
        className="group relative mt-5"
      >
        <div className="absolute -inset-1 animate-tilt rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 opacity-75 blur filter backdrop-blur-lg group-hover:opacity-100"></div>

        <button className="relative rounded-lg px-6 py-3 text-2xl font-medium">
          {isClaiming ? "Minting..." : "Mint your NFT"}
        </button>
      </div>
    </div>
  );
};

export default Home;
