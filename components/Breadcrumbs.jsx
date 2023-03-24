import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs'
import BreadCrumbsStyles from '../styles/components/Breadcrumbs.module.scss'
import { useRouter } from 'next/router';

const Breadcrumbs = ({ name }) => {
  const router = useRouter();
  const pathArray = router.asPath.split('/').filter((x) => x !== '');
  const currentPath = router.asPath.toLowerCase();
  const query = Object.values(router.query)[0];

  const breadcrumbs = pathArray.map((path, index) => ({
    path: `/${pathArray.slice(0, index + 1).join('/')}`,
    name: path.charAt(0).toUpperCase() + path.slice(1),
  }));



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
