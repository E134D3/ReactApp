const user = {
  name: "Владимир",
  lastname: "Иванов",
  email: "semenoleinik@gmail.com",
  id: "1",
  about: "Мой рассказ о космосе.",
  avatar:
  "https://nedopusti.ru/files/39/46/39462acbb13e85f3cd540c95604d53cd.png",
};



const users = {
  0: { name: "Владислава", lastname: "Анютина" },
  1: { name: "Юлия", lastname: "Петрова" },
  2: { name: "Петр", lastname: "Яблочков" },
  3: { name: "Константин", lastname: "Лесков" },
  4: { name: "Ипатий", lastname: "Тетерин" },
};

export function getUser() {
  return user;
}
export function getUsers() {
  return users;
}




