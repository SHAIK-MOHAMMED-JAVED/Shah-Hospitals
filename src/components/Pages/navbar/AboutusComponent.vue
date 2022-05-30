<template>
    <div>
        <base-card id="cardWidth">
        <section id="aboutUs">
            <h1>ABOUT US</h1>
            <p class="aboutUsContent">SHAH is a globally recognised healthcare brand with operations in 12 countries: Germany, Sweden, Poland, Turkey, Belarus, Bulgaria, Georgia, Hungary, Romania, Serbia, Moldova, Ukraine, and India.<br><br>

SHAH is the leading Multispecialty Hospital chain in India. It is one of the largest healthcare providers in Europe with a significant presence in India. The Group provides a broad spectrum of Health care services and has an extensive network of clinics, hospitals, specialty care facilities, Fertility Centers, and diagnostic labs.
SHAH Hospitals is spread across Telangana, Andhra Pradesh, and Maharashtra treating millions of patients every year with a clear focus on raising the standards of health care in India. It has renowned medical teams who work with the greatest technologies and international evidence-based protocols which offer the most comprehensive treatment across all specialties of medicines</p>
        </section>
        </base-card>
        <hr>
        <section id="Content">
            <h1>CORE VALUES</h1>
            <ul>
                <li><base-card class="hoverEffect">Empowerment</base-card></li>
                <li><base-card class="hoverEffect">Integrity</base-card></li>
                <li><base-card class="hoverEffect">Passion of Quality</base-card></li>
                <li><base-card class="hoverEffect">Entrepreneurship</base-card></li>
                <li><base-card class="hoverEffect">Teamwork</base-card></li>
            </ul>
        </section>
        <hr>
        <section id="Content">
            <h1>MISSION</h1>
            <base-card class="hoverEffect">
            <p>" Caring for your health is all we do. "</p>

            </base-card>
        </section>
        <hr>
        <section id="Content">
            <h1>VISION</h1>
            <base-card class="hoverEffect">
            <p>" To be globally recognized for excellence in patient-centric healthcare, multi super-specialty expertise with precision treatment, affordable to patients. "</p>

            </base-card>
        </section>

    </div>
</template>

<style scoped>
#cardWidth{
    max-width: 75rem;
}

#cardWidth:hover, .hoverEffect:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.26)
}
#aboutUs {
    width: 80%;
    /* padding: 3rem; */
    margin: auto;
    display: flex;
    justify-content:space-between;
    /* align-self: stretch; */
    text-align: justify;
    align-items: center;
}
.aboutUsContent {
    width: 60%;
}
/* hr {
    padding: 1rem;
    margin: auto;
} */
#Content {
    width: 80%;
    margin: auto;
    margin-top: 2rem;
    /* padding: 6rem; */
    /* display: flex; */
    justify-content:center;
    text-align: center;
    /* text-align: justify; */

}
ul{
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
li {
    margin: 0 0.5rem;
}
</style>