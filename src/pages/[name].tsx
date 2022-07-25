import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { FormEvent, useState } from "react";
import api from "../services/api";
import { Box } from "../styles/modules/home";

type Repository = {
  name: string;
  description: string;
};

const Home: NextPage = ({ repo }: any) => {
  const [form, setForm] = useState({
    name: repo.name || "",
    description: repo.description || "",
  });

  const token = "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";

  async function editRepository(event: FormEvent) {
    event.preventDefault();
    try {
      await api.patch(
        `/repos/tonsn9/${repo.name}`,
        { form },
        { headers: { Authorization: `token ${token}` } }
      );

      window.alert("Sucesso");
    } catch (error) {}
  }
  return (
    <Box>
      <form onSubmit={editRepository}>
        <input
          type="text"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        <textarea
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
        ></textarea>
        <button className="btnSalvar" type="submit">
          Salvar
        </button>
      </form>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params as any;
  const data = await axios.get(`https://api.github.com/repos/tonsn9/${name}`);
  const repo = data.data;
  return {
    props: {
      repo,
    },
  };
};

export default Home;
