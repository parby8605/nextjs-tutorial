export default function NicknameCustomer({ params, searchParams }) {
  const { information } = params;
  const [type, detail] = information;
  return (
    <main className="flex min-h-screen flex-col items-center text-[22px]">
      어떤 계약에 대한 내용을 볼까요?
      <div>타입 : {}</div>
      <div>상세내용 : {}</div>
    </main>
  );
}
