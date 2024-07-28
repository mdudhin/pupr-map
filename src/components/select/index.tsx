import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./based";

interface SelectProps {
  name?: string;
  placeholder?: string;
  emptyState?: string;
  position?: "popper";
  data?: GroupOrItem[];
  onOpenChange?: (isOpen: boolean) => void;
  onChange?: (event: { target: { value: any; name: string } }) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
}

interface Item {
  value: string;
  label: string;
}

interface Group {
  label: string;
  items: Item[];
}

type GroupOrItem = Group | Item;

const ItemComponent = ({ item }: { item: Item }) => (
  <SelectItem value={item.value}>{item.label}</SelectItem>
);

const GroupComponent = ({ group }: { group: Group }) => (
  <SelectGroup>
    <SelectLabel>{group.label}</SelectLabel>
    {group.items.map((item) => (
      <ItemComponent key={item.value} item={item} />
    ))}
    <SelectSeparator />
  </SelectGroup>
);

const ContentComponent = ({
  content,
  emptyState,
}: {
  content: GroupOrItem[];
  emptyState: string;
}) => {
  if (!content || content.length === 0) {
    return (
      <SelectGroup>
        <SelectLabel>{emptyState}</SelectLabel>
      </SelectGroup>
    );
  }

  return (
    <>
      {content.map((item) =>
        "items" in item ? (
          <GroupComponent key={item.label} group={item} />
        ) : (
          <ItemComponent key={item.value} item={item} />
        )
      )}
    </>
  );
};

const DropdownSelect = (props: SelectProps) => {
  const {
    name = "Select",
    placeholder = "Select an option",
    emptyState = "No data",
    position,
    data = [],
    onOpenChange = () => {},
    onChange = () => {},
    value,
    defaultValue,
    className,
    disabled = false,
  } = props;

  const onValueChange = (value: any) => {
    onChange({ target: { value, name } });
  };

  return (
    <Select
      name={name}
      onValueChange={onValueChange}
      onOpenChange={onOpenChange}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position={position}>
        <ContentComponent content={data} emptyState={emptyState} />
      </SelectContent>
    </Select>
  );
};

export default DropdownSelect;
