import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import regeneratorRuntime from "regenerator-runtime";

const ClientItem = ({ name = 'dsd' }) => {
	const [open, setOpen] = useState(false);
  const cls = ['client-list__item'];

  const setOpened = () => {
		setOpen((prevState) => !prevState);
		
  };

  const tags = props.tags.map((item, index) => {
    return (
      <div key={index} className='client-list__item-tag'>
        {item}
      </div>
    );
  });

  const Tags = props.tags_1.map((item, index) => {
    return (
      <div key={index} className='client-list__item-tag'>
        {item}
      </div>
    );
	});
	
	

  return (
    <article className={bem('element', {
			isOpen: isActive,
		})} onClick={setOpened}>
      <div className='client-list__item-inner'>
        <div className='client-list__item-header'>
          <div className='client-list__item-title'>
            Проверить данные клиента
          </div>

          <label >
            <input type='checkbox'/>
          </label>
        </div>
        <div className='client-list__item-body'>
          <p className='client-list__item-price'>{props.price} руб.</p>
          <p className='client-list__item-company'>{props.company}</p>
          <p className='client-list__item-inn'>ИНН {props.inn}</p>
          <div className='client-list__item-wrap'>
            <div className='client-list__item-tags'>{tags}</div>
            <div className='client-list__item-name'>
              <span>{props.name}</span>
            </div>
            <div className='client-list__item-tags'>
              <Tags />
            </div>
          </div>
        </div>
        <div className='client-list__item-footer'>
          <div className='client-list__item-number'>{props.number}</div>
          <div className='client-list__item-date'>от {props.date}</div>
        </div>
      </div>
    </article>
  );
};

export default ClientItem;
