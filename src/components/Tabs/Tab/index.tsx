// import { Chip, ChipLabel, Container, TabLabel } from "./styles";
import type { TabProps } from "./types";

export default function Tab({
  label,
  onClick,
  active,
  className,
  notifications,
  dataTour,
}: TabProps): JSX.Element {
  return (
    <Container
      $active={active}
      className={className}
      onClick={onClick}
      data-tour={dataTour}
    >
      <TabLabel data-label={label}>{label}</TabLabel>
      {notifications !== undefined ? (
        <Chip>
          <ChipLabel>{notifications}</ChipLabel>
        </Chip>
      ) : null}
    </Container>
  );
}
