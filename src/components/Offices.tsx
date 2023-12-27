import clsx from 'clsx'
import React from 'react'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Kansas City" invert={invert}>
          001 Main Street
          <br />
          Kansas City, Missouri, United States of America
        </Office>
      </li>
      {/* <li>
        <Office name="Billund" invert={invert}>
          002 Main Street
          <br />
          Kansas City, Missouri, United States of America
        </Office>
      </li> */}
    </ul>
  )
}
