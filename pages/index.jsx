import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK("rinkeby");

const bundleDropModule = sdk.getBundleDropModule(
  "0x7133AEdFA4ff108f1C07071CD6A9A05f83c8FFa4"
);

const tokenModule = sdk.getTokenModule(
  "0xf9Fc07f0F786d8a4F6570B6aE90a14Bf13B3Da07"
);

const voteModule = sdk.getVoteModule(
  "0x27638C45fb3D0De189aC059b6d3df5Cb874057EC"
);

const Home = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);
  const signer = provider ? provider.getSigner() : undefined;

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState({});
  const [memberAddresses, setMemberAddresses] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const shortenAddress = str => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
  };

  const handleFormSubmit = async event => {
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
          console.log("successfully voted");
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
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
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
        console.log("🚀 Members addresses", addresses);
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
        console.log("👜 Amounts", amounts);
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
        console.log("🌈 Proposals:", proposals);
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
          console.log("🥵 User has already voted");
        } else {
          console.log("🙂 User has not voted yet");
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

  if (!address) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-teal-600">
        <h1 className="my-5 text-4xl font-semibold text-white">
          Welcome to MyDao
        </h1>
        <button
          onClick={() => connectWallet("injected")}
          className="px-4 py-2 bg-yellow-500"
        >
          Connect your wallet
        </button>
      </div>
    );
  }

  const mintNft = () => {
    setIsClaiming(true);
    bundleDropModule
      .claim("0", 1)
      .then(() => {
        setHasClaimedNFT(true);
        console.log();
      })
      .catch(err => {
        console.error("failed to claim", err);
      })
      .finally(() => {
        setIsClaiming(false);
      });
  };

  if (hasClaimedNFT) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-teal-600">
        <h1 className="my-5 text-4xl font-semibold text-white">
          🍪DAO Member Page
        </h1>
        <p className="my-5 text-lg font-medium text-white">
          Congratulations on being a member
        </p>
        <div className="flex space-x-10">
          <div>
            <h2>Member List</h2>
            <table className="!p-4 rounded-lg text-black bg-white shadow-xl">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Token Amount</th>
                </tr>
              </thead>
              <tbody>
                {memberList.map(member => {
                  return (
                    <tr key={member.address}>
                      <td>{shortenAddress(member.address)}</td>
                      <td>{member.tokenAmount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h2>Active Proposals</h2>
            <form onSubmit={handleFormSubmit}>
              {proposals.map((proposal, index) => (
                <div
                  key={proposal.proposalId}
                  className="!p-5 my-4 bg-white rounded-lg text-black w-[400px] flex flex-col"
                >
                  <h5>{proposal.description}</h5>
                  <div className="flex justify-between mt-4">
                    {proposal.votes.map(vote => (
                      <div
                        key={vote.type}
                        className="flex items-center justify-center space-x-1"
                      >
                        <input
                          type="radio"
                          id={proposal.proposalId + "-" + vote.type}
                          name={proposal.proposalId}
                          value={vote.type}
                          defaultChecked={vote.type === 2}
                        />
                        <label htmlFor={proposal.proposalId + "-" + vote.type}>
                          {vote.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button
                className={`w-full py-2 text-2xl text-center text-white bg-black rounded-full shadow-lg hover:opacity-90 ${
                  isVoting && "cursor-wait"
                } ${hasVoted && "cursor-not-allowed"}`}
                disabled={isVoting || hasVoted}
                type="submit"
              >
                {isVoting
                  ? "Voting..."
                  : hasVoted
                  ? "You Already Voted"
                  : "Submit Votes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-teal-600">
      <h1 className="my-5 text-4xl font-semibold text-white">
        Mint your free 🍪DAO Membership NFT
      </h1>
      <button disabled={isClaiming} onClick={() => mintNft()}>
        {isClaiming ? "Minting..." : "Mint your nft (FREE)"}
      </button>
    </div>
  );
};

export default Home;
