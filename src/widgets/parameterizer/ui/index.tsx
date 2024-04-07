import { ArrowBackButton } from "shared/ui/arrow-back-button";
import { ButtonList } from "shared/ui/card-typed";

interface Props {
  onBack?: () => void;
}

export const Parameterizer = ({ onBack = () => {} }: Props) => {
  return (
    <div className="h-[100svh] lg:min-w-[70svw] lg:w-[70svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[100svw] w-[100svw] backdrop-blur-md dark:shadow-[0_0_15px_20px_rgba(0,0,0,0.6)] shadow-[0_0_15px_20px_rgba(255,255,255,0.6)] dark:bg-black/60 bg-white/60">
      <div className="pl-6 pt-4">
        <ArrowBackButton onClick={onBack} />
      </div>
      <div className="flex flex-col gap-6 p-10 ">
        <ButtonList
          oneRequired
          listName="DataBase"
          titles={["Postgres", "MySQL"]}
        />
        <ButtonList
          oneRequired
          listName="DataBase"
          titles={["Postgres", "MySQL", "MySQL"]}
        />
      </div>
    </div>
  );
};
