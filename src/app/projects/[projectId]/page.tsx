import React from 'react'

const ProjectIdPage = async({
    params,
}: {
    params: Promise<{projectId: string}>
}) => {

    const {projectId} = await params

  return (
    <div>
      ProjectId
    </div>
  )
}

export default ProjectIdPage
