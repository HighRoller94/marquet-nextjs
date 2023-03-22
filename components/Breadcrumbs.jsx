import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs'
import BreadCrumbsStyles from '../styles/components/Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  const router = useRouter();
  const pathArray = router.asPath.split('/').filter((x) => x !== '');

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
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="breadcrumb-item">
            <BsChevronRight className={BreadCrumbsStyles.icon} />
            <Link href={breadcrumb.path}>
              {breadcrumb.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
