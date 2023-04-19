import Person from "./Person";

type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
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
