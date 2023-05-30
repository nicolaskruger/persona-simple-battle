import { useSelector } from "react-redux";
import {
  PartyMember,
  selectAllPartyMember,
} from "../../features/party/partySlice";

const Party = ({ id, idPersona, img, name }: PartyMember) => {
  return (
    <li>
      <p>name: {name}</p>
      <img src={img} alt="" />
    </li>
  );
};

const ShowAllPartyMembers = () => {
  const allMembers = useSelector(selectAllPartyMember);

  return (
    <ul>
      {allMembers.map((party) => (
        <Party key={party.id} {...party} />
      ))}
    </ul>
  );
};

export { ShowAllPartyMembers };
