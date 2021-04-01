import { getEdgePath } from "edge-paths";
import { IPathHelper } from "../Application/Interfaces/index";

export const PathHelper: IPathHelper = {
    GetEdgePath() {
        return getEdgePath() as string;
    }
}