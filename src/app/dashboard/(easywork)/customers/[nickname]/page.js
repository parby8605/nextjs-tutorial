export default async function NicknameCustomer({ params, searchParams }) {
  const { nickname } = params;

  const response = await fetch("http://localhost:3000/api/users/123", {
    method: "POST",
    body: JSON.stringify({
      address: searchParams.address,
      age: searchParams.age,
    }),
  });
  const data = await response.json();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      어떤 유저의 정보를 표시할까요? <b>{nickname}</b>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
