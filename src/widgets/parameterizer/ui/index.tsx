import { Archetype, setSelectedArchetypeParam } from "entities/archetype/model";
import { DownloadArchetype } from "features/download-archetype";
import { ArrowBackButton } from "shared/ui/arrow-back-button";
import { ButtonList } from "shared/ui/card-typed";
import { getSelectedParameterOption } from "../model";

interface Props {
  archetype: Archetype;
  onBack?: () => void;
}

export const Parameterizer = ({ archetype, onBack = () => {} }: Props) => {
  return (
    <div className="flex">
      <div className="h-[100svh] w-[30svw]" onClick={onBack} />
      <div className="relative h-[100svh] overflow-y-scroll lg:overflow-y-hidden lg:min-w-[70svw] lg:w-[70svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[100svw] w-[100svw] backdrop-blur-md dark:shadow-[0_0_15px_20px_rgba(0,0,0,0.6)] shadow-[0_0_15px_20px_rgba(255,255,255,0.6)] dark:bg-black/60 bg-white/60">
        <div className="lg:h-[100svh] w-full lg:overflow-y-scroll">
          <div className="lg:max-w-[50%]">
            <div className="pl-6 pt-4">
              <ArrowBackButton onClick={onBack} />
            </div>
            <div className="flex flex-col gap-6 p-10">
              {archetype.params.map((param, index) => (
                <ButtonList
                  key={index}
                  only={param.optional ? "optional" : "required"}
                  listName={param.showTitle}
                  titles={param.variants}
                  chosen={new Set([param.chosenVariant])}
                  onClick={(indices) => {
                    setSelectedArchetypeParam({
                      ...param,
                      chosenVariant: getSelectedParameterOption(indices),
                    });
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:top-[50svh] lg:right-[21svw] lg:-translate-y-1/2 lg:translate-x-1/2 lg:mt-0 -mt-8 lg:block flex justify-center">
          <DownloadArchetype
            archetypeName={archetype.title}
            params={archetype.params}
          />
        </div>
      </div>
    </div>
  );
};
