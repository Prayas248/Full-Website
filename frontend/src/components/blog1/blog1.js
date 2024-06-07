import React, { useEffect } from 'react';
import './blog1.css';
import Kalamkari from '../../assets/Kalamkari.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const params = useParams();
  useEffect(() => {
    const productId = params.id;
    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
    console.log(productId)
  
  }, []);
    const [comments, setComments] = useState([
        {
          id: 1,
          name: 'porn',
          date: 'December 22, 2023 at 11:42 AM',
          content: 'daktiloglbigbli.6fsCnzUyC44',
        },
        {
          id: 2,
          name: 'damnation',
          date: 'December 31, 2023 at 4:17 PM',
          content: 'damnation.xyandenxvuurlmus.6vsaD7RtBfw8',
        },
      ]);
    
      const [newComment, setNewComment] = useState({
        content: '',
        name: '',
        email: '',
        website: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewComment((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, { ...newComment, date: new Date().toLocaleString() }]);
        setNewComment({
          content: '',
          name: '',
          email: '',
          website: '',
        });
      };
  return (
    <div className="article-container">
      <h2 className="article-title">
        The age-old Indian art form of Kalamkari continues to draw inspiration from mythology, nature, and folklore
      </h2>
      <p className="article-meta">December 3, 2023 / by Admin / in Uncategorized</p>
      <img src={Kalamkari} alt="Kalamkari art" className="article-image" />
      <div className="article-content">
        <p>
          The age-old Indian art form of Kalamkari continues to stand the test of time employing a painstaking technique spanning generations to weave beautiful motifs and stories onto fabric. 
          The term "Kalamkari" refers to the process of hand-painting or block-printing on cloth. It originates from the Persian terms "kalam," which means pen, and "kari," which means workmanship. 
          The origins of the Kalamkari can be found in ancient Indian books and traditions, where references point to the language development as early as the seventh century.
        </p>
        <p>The two most well-known Kalamkari traditions, Srikalahasti and Machilipatnam, have a varied history and come from separate parts of Andhra Pradesh, India. The elaborate temple paintings and Hindu epics serve as sources of inspiration for the mythological Srikalahasti style. On the other hand, the Machilipatnam style—which draws inspiration from Mughal and Persian aesthetics—often uses vivid colors and flowery designs. These geographical differences emphasize Kalamkari’s adaptability and variety, which make it an exciting and ever-evolving art form.</p>
        <p>In order to create fine lines, painters in the Srikalahasti style utilize a long bamboo or palm date stick that has a cotton or hair bundle attached to one end. After being immersed into a solution containing iron filings and water, the “kalam” or pen interacts with the tamarind seeds paste to produce a black outline. After allowing the fabric to dry, expert artisans use vivid natural dyes to carefully fill in the details. In contrast, the Machilipatnam technique prints elaborate motifs onto fabric using manually carved wooden blocks. To produce a final result that is rich and nuanced, the procedure is done numerous times, adding colors and patterns.</p>
        <p>Natural colors made from extracts of plants and minerals are one of Kalamkari’s defining characteristics. Commonly utilized colors include indigo, madder, myrobalan, and alum, which give the artwork a distinctly earthy and organic feel. The use of natural dyes helps to the finished piece’s distinct visual appeal in addition to making Kalamkari more environmentally friendly</p>
        <p>Kalamkari artisans frequently draw inspiration from nature, mythology, and folklore. Srikalahasti Kalamkari often features themes from the epics the Ramayana and the Mahabharata as well as representations of gods and heavenly beings. The Machilipatnam style, on the other hand, harmoniously combines Persian and Indian cultural sensibility with motifs of flowers, birds, and geometric patterns.</p>
        <p>Over time, kalamkari has broken free from its conventional confines and into modern fashion, interior design, and artistic expression. Innovative techniques are being explored by designers and artisans, who are fusing modern aesthetics with traditional Kalamkari to produce a synthesis of the avant-garde and the classical. This rebirth guarantees Kalamkari’s relevance in a world that is changing quickly while also protecting its cultural legacy.</p>
        <p>In the contemporary day, Kalamkari has difficulties despite its ongoing appeal. The traditional craft is under threat from the accessibility of synthetic colors and the rising demand for mass-produced fabrics. Furthermore, it is crucial to transmit the understanding from one generation of people to the next because Kalamkari is a time-consuming art and requires complex abilities. Protecting this priceless cultural asset will require sustained ethical manufacturing methods, support for artisan groups, and awareness-raising. In conclusion, Kalamkari is proof of India’s artistic ability and depth of culture. Its richly traditional past has set the way for a dynamic, ever-evolving art form that still enthralls audiences around the globe. In addition to appreciating the exquisite workmanship of the Kalamkari we also understand the need of protecting and fostering this legacy in order to guarantee that tales will be woven for future generations by the power of the ink and the brilliant colors of natural dyes.</p>
      </div>
      <div className="comments-section">
      <h2 className="cen">{comments.length} Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment-author">
            <div className="author-avatar"></div>
            <span className="author-name">{comment.name}</span>
          </div>
          <div className="comment-meta">
            <span>{comment.date}</span>
          </div>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
          <div className="comment-reply">
            <a href="#">Reply</a>
          </div>
        </div>
      ))}
      <h2 className="cen">Leave a Reply</h2>
      <form className="reply-form" onSubmit={handleSubmit}>
        <textarea
          name="content"
          value={newComment.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />
        <input
          type="text"
          name="name"
          value={newComment.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newComment.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="url"
          name="website"
          value={newComment.website}
          onChange={handleChange}
          placeholder="Website"
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
    </div>
  );
};

export default ArticlePage;
