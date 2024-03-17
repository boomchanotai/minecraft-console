import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoCardProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const InfoCard = (props: InfoCardProps) => {
  const { title, description, children } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default InfoCard;
