import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import {
  Stack,
  Grid,
  Typography,
  styled,
  TextField,
  Button,
  SvgIcon,
} from '@mui/material';
import pattent_rings from '../../assets/pattern_rings.svg';

import { createRecord } from '../../services/AirtableServices';
import { EMAIL_VALIDATION_REGEX } from '../../utils/regex';

// const StyledContactMe = styled(Typography)`
//   &.MuiTypography-root {
//     color: var(--white, #fff);
//     font-family: Space Grotesk;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 26px; /* 162.5% */
//     letter-spacing: 2.286px;
//   }
// `;

const StyledButtonUnderline = styled('div')`
  width: 144px;
  height: 2px;
  background: var(--green, #4ee1a0);
`;

const StyledTextField = styled(TextField)`
  width: 445px;
  .MuiInput-root {
    height: 43px;
  }
  .MuiInput-input {
    color: white;
    padding: 0 24px 17px;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.222px;
  }
  .MuiInput-root.Mui-error:before {
    border-bottom-color: #ff6f5b;
  }
  .MuiInput-root.Mui-error:after {
    border-bottom-color: #ff6f5b;
  }
  .MuiInput-root:before {
    border-bottom: 1px solid white;
  }
  .MuiInput-root:after {
    border-bottom: 1px solid #4ee1a0;
  }
  .MuiInput-root:hover {
    border-bottom: 1px solid #4ee1a0;
  }
  .MuiInput-root:hover:after {
    border-bottom: none;
    transition: none;
  }
  .Mui-error:not(MuiInput-root:hover) {
    border-bottom: #ff6f5b;
  }
  .MuiFormHelperText-root.Mui-error {
    color: #ff6f5b;
    font-family: Space Grotesk;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.167px;
  }
`;

const StyledMultiLineTextField = styled(TextField)`
  width: 445px;
  .MuiInput-root {
    height: 107px;
  }
  .MuiInput-input {
    color: white;
    padding: 0 24px;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.222px;
  }
  .MuiInput-root.Mui-error:before {
    border-bottom-color: #ff6f5b;
  }
  .MuiInput-root.Mui-error:after {
    border-bottom-color: #ff6f5b;
  }
  .MuiInput-root:before {
    border-bottom: 1px solid white;
    height: 0;
  }
  .MuiInput-root:after {
    border-bottom: 1px solid #4ee1a0;
  }
  .MuiInput-root:hover:not(Mui-error) {
    border-bottom: 1px solid #4ee1a0;
  }
  .MuiInput-root:hover:after {
    border-bottom: none;
    transition: none;
  }
  .Mui-error:not(MuiInput-root:hover) {
    border-bottom: #ff6f5b;
  }
  .MuiFormHelperText-root.Mui-error {
    color: #ff6f5b;
    font-family: Space Grotesk;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.167px;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: white;
    font-family: Space Grotesk;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    letter-spacing: 2.286px;
  }
  &.MuiButton-root:hover {
    color: #4ee1a0;
  }
`;

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  [theme.breakpoints.between('sm', 'md')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '72px' /* 100% */,
    letterSpacing: '-2.045px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    fontFeatureSettings: 'clig off, liga off',
    fontFamily: 'Space Grotesk',
    fontSize: '88px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '88px' /* 100% */,
    letterSpacing: '-2.5px',
  },
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFeatureSettings: 'clig off, liga off',
  [theme.breakpoints.between('sm', 'md')]: {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px',
    textAlign: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    textAlign: 'left',
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px' /* 155.556% */,
  },
}));
`
  width: 445px;
  color: white;
  
  

  /* Body */
  font-family: Space Grotesk;
  font-size: ;
  font-style: normal;
  font-weight: ;
  line-height: ; 
`;

const StyledContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '768px',
    padding: '60px 129px',
    flexShrink: 0,
    position: 'relative',
  },
  [theme.breakpoints.up('xl')]: {
    width: 'auto',
    height: '327px',
    flexShrink: 0,
    position: 'relative',
  },
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '445px',
    alignItems: 'center',
    gap: '20px',
  },
  [theme.breakpoints.up('xl')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const StyledContactStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    width: '445px',
    height: '176px',
    gap: '20px',
    alignItems: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    width: '445px',
    height: '208px',
    gap: '36px',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  [theme.breakpoints.between('sm', 'md')]: {
    marginTop: '48px',
  },
  [theme.breakpoints.up('xl')]: {},
}));

const SUBTITLE = `I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.`;

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const errorMessageCreator = (errorType: string | undefined) => {
  let message = '';
  if (errorType === 'required') {
    message = 'Field is required';
  } else if (errorType === 'pattern') {
    message = 'Sorry, invalid format here';
  }
  return message;
};

export const ContactMeSection = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (data: Inputs) => {
    const { name, email, message } = data;

    const record = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Message: message,
          },
        },
      ],
    };

    await createRecord(record)
      .then((response) => {
        if (response.status === 200) {
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <StyledContainer>
      <StyledGridItem item display="flex">
        <Grid
          sx={{
            width: '530px',
            height: '129px',
            flexShrink: '0',
            position: 'absolute',
            marginTop: '243px',
            left: -265,
          }}
        >
          <img
            src={pattent_rings}
            style={{ width: '530px', height: '129px', flexShrink: '0' }}
          />
        </Grid>
        <StyledContactStack
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <StyledTitle>Contact</StyledTitle>
          <StyledSubtitle>{SUBTITLE}</StyledSubtitle>
        </StyledContactStack>
        <StyledForm
          onSubmit={handleSubmit((data) => {
            handleOnSubmit(data);
          })}
        >
          <Stack
            display="flex"
            alignItems="flex-start"
            gap="32px"
            sx={{ width: '445px', height: '327px' }}
          >
            <Stack>
              <StyledTextField
                {...register('name', { required: true })}
                color="primary"
                error={errors?.name?.type === 'required'}
                helperText={errorMessageCreator(errors?.name?.type)}
                FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                InputProps={{
                  endAdornment: errors?.name?.type === 'required' && (
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                        <rect
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                          fill="#FF6F5B"
                        />
                        <rect
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                          fill="#FF6F5B"
                        />
                      </svg>
                    </SvgIcon>
                  ),
                }}
                id="name"
                placeholder="NAME"
                value={name}
                onChange={handleNameChange}
                variant="standard"
              />
            </Stack>
            <Stack>
              <StyledTextField
                {...register('email', {
                  required: true,
                  pattern: EMAIL_VALIDATION_REGEX,
                })}
                id="email"
                error={
                  errors?.email?.type === 'required' ||
                  errors?.email?.type === 'pattern'
                }
                InputProps={{
                  endAdornment: errors?.email && (
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                        <rect
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                          fill="#FF6F5B"
                        />
                        <rect
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                          fill="#FF6F5B"
                        />
                      </svg>
                    </SvgIcon>
                  ),
                }}
                helperText={errorMessageCreator(errors?.email?.type)}
                FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                placeholder="EMAIL"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
              />
            </Stack>
            <Stack>
              <StyledMultiLineTextField
                {...register('message', { required: true })}
                id="message"
                error={errors?.message?.type === 'required'}
                helperText={errorMessageCreator(errors?.message?.type)}
                FormHelperTextProps={{ sx: { textAlign: 'right' } }}
                InputProps={{
                  endAdornment: errors?.message?.type === 'required' && (
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                        <rect
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                          fill="#FF6F5B"
                        />
                        <rect
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                          fill="#FF6F5B"
                        />
                      </svg>
                    </SvgIcon>
                  ),
                }}
                multiline
                rows={4}
                placeholder="MESSAGE"
                variant="standard"
                value={message}
                onChange={handleMessageChange}
              />
            </Stack>
            <Grid
              item
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <Stack
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                sx={{
                  width: '144px',
                  gap: '10px',
                }}
              >
                <StyledButton
                  type="submit"
                  sx={{ padding: '0', color: 'white' }}
                >
                  SEND MESSAGE
                </StyledButton>
                <StyledButtonUnderline />
              </Stack>
            </Grid>
          </Stack>
        </StyledForm>
      </StyledGridItem>
    </StyledContainer>
  );
};
