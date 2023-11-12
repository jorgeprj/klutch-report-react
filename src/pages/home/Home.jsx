import FeaturedPost from '../../components/posts/FeaturedPost'
import SidePost from '../../components/posts/SidePost'
import LastPost from '../../components/posts/LastPost'
import "./Home.css"
import { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Loading from '../../components/loading/Loading'

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [featuredPost, setFeaturedPost] = useState();

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts', {
					method: 'GET',
					headers: {
						'content-type': 'application/json',
					},
				});

				if (!response.ok) {
					throw new Error('Failed to fetch posts');
				}

				const data = await response.json();
				setPosts(data);
				const featured = data.find(post => post.main === true);
				setFeaturedPost(featured);


				setTimeout(() => {
					setLoading(false);
				}, 500);

			} catch (error) {
				console.error('Error fetching posts:', error);
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);


	if (loading) {
		return (
			<Loading/>
		)

	}

	return (
		<div className='home'>
			<div className='section'>
				<section className='featured-posts'>
					<FeaturedPost key={featuredPost.id} post={featuredPost} />
					<section className='side-posts'>
						{posts
							.filter(post => post.main === true)
							.reverse()
							.slice(0, 3)
							.map(post => (
								<SidePost key={post.id} post={post} />
							))}
					</section>
				</section>
				<section className='last-posts'>
					<div className="last-posts-title">Latest</div>
					{posts.map(post => (
						post.main === false && (
							<LastPost key={post.id} post={post} />
						)
					))}
				</section>
			</div>
			<Footer/>
		</div>

	)
}

export default Home