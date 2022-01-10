import { VoteType } from "./VoteType";

export interface ProposalType {
  description: string;
  votes: [VoteType];
  proposalId: string;
}
