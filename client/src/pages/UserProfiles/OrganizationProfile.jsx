import { Input } from '@chakra-ui/react';
import React from 'react';

const OrganizationProfile = () => {
  return (
    <div className="organizationprofile">
      <div className="row">
        <div className="col-lg-8">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2">Organization Name</div>
            <div className="col-lg-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationProfile;
