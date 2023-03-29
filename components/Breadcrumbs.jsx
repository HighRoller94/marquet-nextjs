import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs'
import BreadCrumbsStyles from '../styles/components/Breadcrumbs.module.scss'
import { useRouter } from 'next/router';

const Breadcrumbs = ({ name, searchQuery }) => {
  const router = useRouter();
  const pathArray = router.asPath.split('/').filter((x) => x !== '');
  const currentPath = router.asPath.toLowerCase();
  const query = Object.values(router.query)[0];

  const breadcrumbs = pathArray.map((path, index) => ({
    path: `/${pathArray.slice(0, index + 1).join('/')}`,
    name: path.charAt(0).toUpperCase() + path.slice(1),
  }));

  console.log(searchQuery)
  return (
    <nav aria-label="Breadcrumb" className={BreadCrumbsStyles.container}>
      <ol className={BreadCrumbsStyles.breadcrumbs}>
        <li className="breadcrumb-item">
          <Link href="/">
            Home
          </Link>
        </li>
        {name ? (
            <>
              <Link href={breadcrumbs[1].path}>
                <li className={BreadCrumbsStyles.wrapper}>
                  <BsChevronRight className={BreadCrumbsStyles.icon} />
                  <span>
                    Search results for "{query}"
                  </span>
                </li>
              </Link>
              <li className={BreadCrumbsStyles.wrapper}>
                <BsChevronRight className={BreadCrumbsStyles.icon} />
                <span>{name}</span>
              </li>
            </>
        ) : (
          <>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className={BreadCrumbsStyles.wrapper}>
              <BsChevronRight className={BreadCrumbsStyles.icon} />
              {currentPath.includes('search') ? (
                <span>
                  Search results for "{query}"
                </span>
              ) : (
                  <Link href={breadcrumb.path}>
                    {breadcrumb.name}
                  </Link>
              )}
            </li>
          ))}
          </>
        )}
        
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

export async function getServerSideProps({ query }) {
  const { searchQuery } = query

  return {
    props: {
      searchQuery,
    }, // This will be passed to the page component as props
  };
}