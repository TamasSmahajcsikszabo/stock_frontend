import {
    DocumentDuplicateIcon,
    MagnifyingGlassIcon
  } from '@heroicons/react/24/outline';
  import React from 'react';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Search', href: '/search', icon: MagnifyingGlassIcon },
    {
      name: 'Details',
      href: '/details',
      icon: DocumentDuplicateIcon,
    }
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
            >
              <LinkIcon />
              <p>{link.name}</p>
            </a>
          );
        })}
      </>
    );
  }