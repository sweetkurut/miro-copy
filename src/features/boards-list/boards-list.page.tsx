import { CONFIG } from "@/shared/model/config";

function BoardsListPage() {
  return (
    <div>
      <h1>Boards list {CONFIG.API_BASE_URL} </h1>
    </div>
  );
}

export const Component = BoardsListPage;
