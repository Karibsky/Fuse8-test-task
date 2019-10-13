import React from 'react';
import './card.scss';

const Card = ({ title, image, textone, texttwo, textprice, textsmall, labeltext, orangecolored  }) => {
	return (
		<div className="card">
			<img src={image} alt="card" />
			<div className="card__label__overlay">
				{orangecolored ? 
					( <div className="card__label orange">
							<p>{labeltext}</p>
						</div>
					) : 
					( <div className="card__label">
							<p>{labeltext}</p>
						</div> 
					)
				}
			</div>
			<div className="card__description">
				<h5 className="card__description__title">{title}</h5>
				<div className="card__description__body">
					<p className="card__description__text-one">{textone}</p>
					<p className="card__description__text-two">{texttwo}&nbsp;<b>{textprice}</b></p>
					<p className="card__description__text-small">{textsmall}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;