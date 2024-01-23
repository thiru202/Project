import React from "react";

export default function About() {
  return (
    <div>
      <div class="container">
        <div class="about-section">
          <h2 class="text-center">About Us</h2>
          <div class="row">
            <div class="col-lg-6">
              <img
                src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&ga=GA1.1.1762242895.1705746403&semt=sph"
                alt="About Us"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-lg-6 about-text">
              <h3 className="text-primary">Our Vision</h3>
              <p>
                We envision a world where the balance between human activities
                and the natural environment is harmonious, ensuring the vitality
                of terrestrial ecosystems. Through our initiatives, we strive to
                combat deforestation, reverse land degradation, and promote
                responsible land management practices.
              </p>
              <p>
                <h3 className="text-primary">Our Initiatives</h3>
                Reforestation and Conservation: We actively engage in
                reforestation projects to restore ecosystems and protect
                biodiversity hotspots. Sustainable Land Management: Our programs
                promote responsible land use, reducing the impact of human
                activities on fragile environments. Community Empowerment: We
                collaborate with communities to foster sustainable practices
                that harmonize human needs with the preservation of local
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
