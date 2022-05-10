import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies-list">
      {
        beanieBabies.map((beanie) => (
          <BeanieBaby key={beanie.id} {...beanie} />
        ))
        /* render out the beanie babies as a list */
      }
    </div>
  );
}
