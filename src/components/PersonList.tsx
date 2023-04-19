import Person from "./Person";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <Person key={name.firstName + name.lastName} name={name} />
      ))}
    </div>
  );
};

export default PersonList;
