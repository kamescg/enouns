import FormTransferFrom from "@/components/FormTransferFrom";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="min-h-vh bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white relative flex justify-center items-center">
        <div className="container max-w-screen-md mx-auto">
          <FormTransferFrom />
        </div>
      </div>
    </Main>
  );
};

export default Index;
