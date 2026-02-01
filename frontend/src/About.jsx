import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">
      <div className="about-header">
        <Link to="/" className="back-link">← Home</Link>
        <h1>About Maui's Memories</h1>
        <div className="header-space"></div>
      </div>

      <p>Maui’s Memories began after a difficult chapter in our lives. In 2024, my partner and I were involved in a serious car accident in which our dogs were ejected from the vehicle. Maui fought hard and spent seven days at the emergency veterinary hospital before eventually succumbing to her injuries. Losing her was devastating, and the months that followed were focused on healing both physically and emotionally.</p>
      <p>Rather than letting that loss define the experience, we wanted to find a way to turn something painful into something positive. With extra space in our home and a desire to help, we began fostering dogs while they waited for adoption.</p>
      <p>Over the next year, we fostered more than 30 dogs. Each one came through our home with different needs, some needed time to build confidence, some needed help adjusting to a home environment, and others needed care and stability while they healed. Our goal was always the same: to give each dog the support and structure they needed to succeed in their forever home.</p>
      <p>While the rescue organization often thanked us for taking dogs in week after week, the truth is that the dogs gave just as much back to us. They provided purpose, routine, and positivity during a time when we were still recovering and learning how to move forward.</p>
      <p>Maui’s Memories is our way of honoring Maui and the joy she brought into our lives, while also remembering every dog who passed through our home on their way to a family of their own. This site exists to preserve those memories—the photos, the personalities, and the small moments that made each dog special.</p>
      <div className="about-photo-grid">
        <img
          src="/assets/Maui-1.jpeg"
        />
        <img
          src="/assets/Maui-2.JPG"
        /><img
          src="/assets/Maui-3.JPG"
        /><img
          src="/assets/Maui-4.jpg"
        /><img
          src="/assets/Maui-5.JPG"
          style={{ objectPosition: "bottom" }}
        /><img
          src="/assets/Maui-6.jpg"
        />
      </div>
    </div>
  );
}

export default About;