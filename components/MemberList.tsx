import { MemberType } from "../types/MemberType";

interface Props {
  memberList: MemberType[];
}

const MemberList: React.FC<Props> = ({ memberList }) => {
  const shortenAddress = (str: string) => {
    return str.substring(0, 6) + "..." + str.substring(str.length - 4);
  };

  return (
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
          {memberList.map((member: MemberType) => {
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
  );
};

export default MemberList;
