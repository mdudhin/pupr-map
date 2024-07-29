import ProjectBendungan from "./type/bendungan";
import ProjectIrigasi from "./type/irigasi";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const { type } = useParams();
  const detailType = () => {
    if (type === "irigasi") {
      return <ProjectIrigasi />;
    }
    if (type === "bendungan") {
      return <ProjectBendungan />;
    }
  };

  return detailType();
};

export default WorkDetail;
