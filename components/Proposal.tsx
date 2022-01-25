import { FC } from "react";
import { VoteType } from "../types/VoteType";

interface Props {
  description: string;
  votes: [VoteType];
  proposalId: string;
}

const Proposal: FC<Props> = ({ description, votes, proposalId }) => {
  return (
    <div className="my-5 flex w-[400px] flex-col rounded-lg bg-gradient-to-tr from-pink-400 to-blue-400 !p-5">
      <h5 className="break-words">{description}</h5>
      <div className="mt-4 flex justify-between">
        {votes.map(vote => (
          <div
            key={vote.type}
            className="flex items-center justify-center space-x-1"
          >
            <input
              type="radio"
              id={proposalId + "-" + vote.type}
              name={proposalId}
              value={vote.type}
              defaultChecked={vote.type === 2}
            />
            <label htmlFor={proposalId + "-" + vote.type}>{vote.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposal;
