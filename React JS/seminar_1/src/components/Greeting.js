/* Задание 2 (тайминг 15 минут)
1. Создать функциональный компонент Greeting, который выводит 
простое приветствие, например, <h1>Привет, React!</h1>.
2. Импортировать компонент Greeting в App.js и использовать его 
внутри компонента App.
3. Запустить приложение и убедиться, что приветствие отображается на 
странице.
ffc - для автомат.сниппета
 */

import "../Greeting.css";
function Greeting() {
  return (
    <div className="greeting">
      <h1>Привет студенты</h1>
    </div>
  );
}
export default Greeting;