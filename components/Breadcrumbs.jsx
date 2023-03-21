import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React from 'react';

export default function NextBreadcrumbs() {
  // Gives us ability to load the current route details
  const router = useRouter();

  return (
    <Breadcrumbs aria-label="breadcrumb" />
  );
}


// Each individual "crumb" in the breadcrumbs list
function Crumb({ text, href, last=false }) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <Typography color="text.primary">{text}</Typography>
  }

  // All other crumbs will be rendered as links that can be visited 
  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
}
