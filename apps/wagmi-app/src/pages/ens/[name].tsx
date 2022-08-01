import FormPreviewNoun from "@/components/FormPreviewNoun";
import ENouns from "@enouns/core-sol/deployments/localhost/ENouns.json";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { useRouter } from "next/router";
import { useContractRead } from "wagmi";

const Citizenship = () => {
  const { query } = useRouter();

  const { data, error, isError } = useContractRead(
    {
      addressOrName: ENouns.address,
      contractInterface: ENouns.abi,
    },
    "previewUsingName",
    { args: [query.name] }
  );

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-36 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white relative">
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center opacity-20 z-0 blur-xl"
          style={{
            backgroundImage: `url(${data})`,
          }}
        />
        <div className="relative z-10x">
          {data && (
            <div className="text-center">
              <img
                width={500}
                className="rounded-xl shadow-lg mx-auto"
                src={data as unknown as string}
              />
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Citizenship;
