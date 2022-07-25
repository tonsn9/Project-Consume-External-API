import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import { Container } from "../styles/modules/home";

type Repository = {
  name: string;
  description: string;
};

const Home: NextPage = () => {
  const { data: repositories, isFetching } = useApi<Repository[]>(
    "/users/tonsn9/repos"
  );

  const router = useRouter();

  return (
    <Container>
      <h1 className="title">Lista Repo Github</h1>
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th></th>
          </tr>
          {repositories?.map((repo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{repo.name}</td>
              <td>
                <button
                  className="btnEdit"
                  type="button"
                  onClick={() => router.push(`/${repo.name}`)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default Home;
