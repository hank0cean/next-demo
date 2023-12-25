export type TabProps = {
  label: string;
  onClick: () => void;
  className?: string;
  active?: boolean;
  hideTab?: boolean;
  notifications?: number;
  dataTour?: string;
};

export type StyledContainerProps = {
  $active: TabProps["active"];
};
