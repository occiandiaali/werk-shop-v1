import React from 'react';

import './Category.css';

const Category = () => {
    return(
        <div id="basket">
             <div className="card-deck">
      {/*cards */}
          <div className="card">
            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/10/13/17/16/car-engine-1738309_960_720.jpg" className="card-img" alt="auto engine" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div>  

      {/**cards 2 */}
          <div className="card">
           <img src="https://cdn.pixabay.com/photo/2017/07/25/09/08/the-push-rod-2537315_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div> 

          {/*cards 3*/}
          <div className="card">
            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div>  

      {/**cards 4 */}
          <div className="card">
           <img src="https://cdn.pixabay.com/photo/2016/09/01/15/16/chemist-1636375_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div>

      </div>{/** card deck 1 */}    

      <div className="card-deck">
          {/*cards 5 */}
          <div className="card">
            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2014/08/28/09/11/angle-grinder-429757_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div>  

      {/**cards 6 */}
          <div className="card">
           <img src="https://cdn.pixabay.com/photo/2018/07/13/11/09/african-american-3535516_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div> 

          {/*cards 7*/}
          <div className="card">
            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/08/19/08/26/artisan-895670_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div>  

      {/**cards 8 */}
          <div className="card">
           <img src="https://cdn.pixabay.com/photo/2015/04/02/14/05/construction-703807_960_720.jpg" className="card-img" alt="" />
          
            <div className="card-body">
              <h5 className="card-title">Any Wok</h5>
              <p className="card-text">Some dummy text</p>
              <a href="#" className="btn btn-outline-primary stretched-link">See more</a>
            </div>
          </div> 

      </div>{/** card deck */}
        </div>
    );
};

export default Category;