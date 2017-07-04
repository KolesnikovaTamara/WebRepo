import { JobProfileWizardPage } from './app.po';

describe('job-profile-wizard App', () => {
  let page: JobProfileWizardPage;

  beforeEach(() => {
    page = new JobProfileWizardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
