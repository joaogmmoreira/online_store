import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoryAside extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { handleClickCategoryBtn } = this.props;
    const { categories } = this.state;
    return (
      <section>
        <h3>Categorias</h3>
        <div>
          {
            categories.map(({ id, name }) => (
              <div key={ id }>
                <button
                  type="button"
                  data-testid="category"
                  onClick={ handleClickCategoryBtn }
                >
                  { name }
                </button>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}
CategoryAside.propTypes = {
  handleClickCategoryBtn: PropTypes.func,
}.isRequired;
export default CategoryAside;
