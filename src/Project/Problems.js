import React from "react";
import './Problems.css'

export default function Problems() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
          <div className="card blur" >
            <img
              src="https://images.pexels.com/photos/2874751/pexels-photo-2874751.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="Deforestation"
            />
            <div className="card-body">
              <h5 className="card-title">Deforestation</h5>
              <p className="card-text">
                The clearing of forests for agriculture, logging, and
                urbanization contributes to the loss of biodiversity, disrupts
                ecosystems, and accelerates climate change.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur" >
            <img
              src="https://media.istockphoto.com/id/1351485188/photo/dry-and-cracked-land-dry-due-to-lack-of-rain-effects-of-climate-change-such-as.jpg?b=1&s=612x612&w=0&k=20&c=J_53bTIMMsNbx5LE4KawIeOY2sTIEuo907dSn-sEZnA="
              className="card-img-top"
              alt="Desertification"
            />
            <div className="card-body">
              <h5 className="card-title">Desertification</h5>
              <p className="card-text">
                Unsustainable land use practices, such as overgrazing and poor
                irrigation, lead to the degradation of fertile land,
                transforming it into arid and desert-like areas.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur" >
            <img
              src="https://img.freepik.com/free-vector/climate-change-concept-illustration_114360-8728.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=ais"
              className="card-img-top"
              alt="Biodiversity Loss"
            />
            <div className="card-body">
              <h5 className="card-title">Biodiversity Loss</h5>
              <p className="card-text">
                The extinction of plant and animal species due to habitat
                destruction, pollution, and climate change threatens the
                delicate balance of ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur">
            <img
              src="https://img.freepik.com/free-photo/climate-change-concept-collage_23-2149129761.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=ais"
              className="card-img-top"
              alt="Climate Change Impact"
            />
            <div className="card-body">
              <h5 className="card-title">Climate Change Impact</h5>
              <p className="card-text">
                Changing climate patterns, including temperature increases and
                altered precipitation, affect ecosystems, leading to shifts in
                species distribution and ecosystem functions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card blur">
            <img
              src="https://img.freepik.com/free-photo/wide-angle-shot-white-smoke-coming-out-nuclear-plants_181624-14959.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=sph"
              className="card-img-top"
              alt="Pollution"
            />
            <div className="card-body">
              <h5 className="card-title">Pollution</h5>
              <p className="card-text">
                Land pollution from industrial activities, improper waste
                disposal, and the use of harmful pesticides and chemicals
                negatively impacts soil quality and biodiversity.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur">
            <img
              src="https://img.freepik.com/free-photo/high-angle-pie-chart-with-cities_52683-98166.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=sph"
              className="card-img-top"
              alt="Urbanization"
            />
            <div className="card-body">
              <h5 className="card-title">Urbanization</h5>
              <p className="card-text">
                Rapid urban development often results in habitat loss,
                fragmentation, and increased pressure on natural resources.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur">
            <img
              src="https://img.freepik.com/free-photo/green-pattern-background-sea-anemone_1360-164.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=ais"
              className="card-img-top"
              alt="Invasive Species"
            />
            <div className="card-body">
              <h5 className="card-title">Invasive Species</h5>
              <p className="card-text">
                The introduction of non-native species can disrupt local
                ecosystems, outcompeting native species and causing ecological
                imbalances.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card blur">
            <img
              src="https://img.freepik.com/free-vector/natural-resource-depletion-concept-illustration_114360-8724.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=ais"
              className="card-img-top"
              alt="Overexploitation of Resources"
            />
            <div className="card-body">
              <h5 className="card-title">Overexploitation of Resources</h5>
              <p className="card-text">
               
                Unsustainable extraction of resources such as timber, minerals,
                and freshwater can deplete ecosystems and lead to long-term
                ecological damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
