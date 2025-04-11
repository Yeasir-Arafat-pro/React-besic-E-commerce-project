import React from 'react'

import { Helmet } from 'react-helmet'

const PageTitle = ({pageTitle}) => {
  return (
    <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
  )
}

export default PageTitle