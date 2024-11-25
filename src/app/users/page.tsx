import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from "@/components/Layouts/DefaultLaout";


const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
