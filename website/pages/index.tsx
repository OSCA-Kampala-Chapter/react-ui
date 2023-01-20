import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
        <main>
          <h1 className="font-mono text-xl code">
            Welcome to React&nbsp;
            <span className="text-indigo-700">UI</span>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
