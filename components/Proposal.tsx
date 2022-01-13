import { FC } from "react";
import { VoteType } from "../types/VoteType";

interface Props {
  description: string;
  votes: [VoteType];
  proposalId: string;
}

const Proposal: FC<Props> = ({ description, votes, proposalId }) => {
  return (
    <div className="!p-5 my-5 bg-gradient-to-tr from-pink-400 to-blue-400 rounded-lg w-[400px] flex flex-col">
      <h5 className="break-words">{description}</h5>
      <div className="flex justify-between mt-4">
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
