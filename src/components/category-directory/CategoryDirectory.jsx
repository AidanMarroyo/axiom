import categories from '../../lib/categories';
import CategoryComponent from '../category-component/CategoryComponent';
import './categories.styles.scss';

const CategoryDirectory = () => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryComponent key={category.id} category={category} />
			))}
		</div>
	);
};

export default CategoryDirectory;
