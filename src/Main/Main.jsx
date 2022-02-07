import React, {useState} from 'react';
import "./main.css";
import Modal from "../Modal/Modal";
const test = {
  2: 'ой',
  3: 'ий',
  6: 'ой',
  7: 'ой',
  8: 'ой',
};

const Main = ({ modalActive, closeModal }) => {
  const [inputValue, setInputValue] = useState('');
  const [resultCalculate, setResultCalculate] = useState([]);
  const calculateTax = () => {
    const result = [];
    let yearResult = 2000000 * 0.13;
    const countYear = Math.ceil(2000000 / (inputValue * 12));
    for (let i = 1; i <= countYear; i++) {
      let count = (inputValue * 12) * 0.13;
      if (yearResult >= count){
          yearResult = yearResult - count;
      }else{
       count = yearResult;
      }
      result.push(count);
    }
    setResultCalculate(result);
  };

  return (
    <>
    <Modal active={modalActive} setActive={closeModal}>
      <div className="modal__title">
        <h3 className="modal__heading">Налоговый вычет</h3>
        <span className="modal__cross" onClick={closeModal}>&#10060;</span>
        <p className="modal__description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего
        официального годового дохода.
        </p>
        <section className="modal__section-your-monthly-salary">
        <label htmlFor="label-monthly-salary" className="modal__label-monthly-salary">Ваша зарплата в месяц</label>
        <input
          id="label-monthly-salary"
          className="input__data-monthly-salary"
          type="text"
          placeholder="Введите данные"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        </section>
        <div
          className="modal__calculate-monthly-salary" onClick={calculateTax}>Расcчитать</div>
        <label className="modal__total--calculation">Итого можете внести в качестве досрочных:</label>
        <div className="test">
        {!!resultCalculate.length && resultCalculate.map((e, i) => {
          return (
            <div>
              <input type="checkbox" className="modal__description-input-checkbox"/>
              <label className="modal__total-amount-deposited">{e} рублей</label>
              <span className="modal__description-year"> в {i + 1} - {test[i + 1] || 'ый'} год</span>
            </div>
          )
        })}
        </div>
        <section className="modal__section-what-we-reduce">
        <span className="modal__what-we-reduce-text">Что уменьшаем?</span>
        <div className="wrapper-payment-term">
          <div className="wrapper-payment-term__item-payment">Платёж</div>
          <div className="wrapper-payment-term__item-term">Срок</div>
        </div>
        </section>
        <button className="add-early-payment" onClick={closeModal}>Добавить</button>
      </div>
  </Modal>
    </>
);
};

export default Main;
