import { FC } from "react";
import { MemberType } from "../types/MemberType";

interface Props {
  memberList: MemberType[];
}

const MemberList: FC<Props> = ({ memberList }) => {
  const shortenAddress = (str: string) => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
  };

  const sortedMemberList = memberList.sort((a, b) => {
    return parseInt(b.tokenAmount) - parseInt(a.tokenAmount);
  });

  return (
    <div>
      <h2 className="mb-5 text-lg font-medium">Member List</h2>
      <table className="w-full flex-col justify-between rounded-lg bg-gradient-to-tr from-blue-400 to-pink-400 p-5 md:w-auto">
        <thead className="flex w-full justify-between space-x-20">
          <tr className="flex w-full justify-between">
            <th className="px-1 py-2">Rank</th>
            <th className="px-5 py-2">Address</th>
            <th className="px-5 py-2">Token Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedMemberList.map((member, i) => (
            <tr
              className="flex w-full justify-between text-left"
              key={member.address}
            >
              <td className="px-2 py-2">{i + 1}.</td>
              <td className="px-5 py-2 text-left lowercase">
                {shortenAddress(member.address)}
              </td>
              <td className="px-5 py-2">{member.tokenAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
