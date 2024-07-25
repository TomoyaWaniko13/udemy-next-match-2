import { getMembers } from '@/app/actions/membersActions';

const MembersPage = async () => {
  const members = await getMembers();

  return (
    <div>
      <ul>{members && members.map((member) => <li key={member.id}>{member.name}</li>)}</ul>
    </div>
  );
};

export default MembersPage;
